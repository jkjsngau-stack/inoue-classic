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

  // 最大幅1920px（縮小のみ）、WebP quality 95 で高画質変換
  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
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
