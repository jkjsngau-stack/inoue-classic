import sharp from "sharp"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const worksDir = path.join(__dirname, "../public/images/works")

const files = fs
  .readdirSync(worksDir)
  .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
  .sort()

console.log(`\n📸 ${files.length}枚の画像を変換します...\n`)

let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const inputPath = path.join(worksDir, file)
  const baseName = path.parse(file).name
  const outputPath = path.join(worksDir, `${baseName}.webp`)

  const beforeSize = fs.statSync(inputPath).size

  // EXIF方向を適用してから変換（縦横が正しく保たれる）
  const image = sharp(inputPath).rotate()
  const meta = await image.clone().metadata()
  const isPortrait = (meta.height ?? 0) > (meta.width ?? 0)

  await image
    .resize({
      // 縦画像は高さ基準、横画像は幅基準で1920px上限
      ...(isPortrait
        ? { height: 1920, withoutEnlargement: true }
        : { width: 1920, withoutEnlargement: true }),
    })
    .webp({ quality: 95, effort: 6 })
    .toFile(outputPath)

  const afterSize = fs.statSync(outputPath).size
  const ratio = ((1 - afterSize / beforeSize) * 100).toFixed(0)

  totalBefore += beforeSize
  totalAfter += afterSize

  console.log(
    `✅ ${file}\n   ${(beforeSize / 1024).toFixed(0)}KB → ${(afterSize / 1024).toFixed(0)}KB (${ratio}%削減)\n`
  )

  // 変換成功後に元ファイルを削除
  fs.unlinkSync(inputPath)
}

console.log("─".repeat(50))
console.log(`合計: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB`)
console.log(`削減率: ${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%`)
console.log("\n✨ 変換完了！")
