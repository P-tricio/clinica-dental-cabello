import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync } from 'fs'
import { join, basename } from 'path'

const INPUT_DIR = 'public/images/3d-frames'
const OUTPUT_DIR = 'public/images/3d-frames-webp'

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true })

const files = readdirSync(INPUT_DIR).filter(f => f.endsWith('.png')).sort()
console.log(`Converting ${files.length} PNGs to WebP...`)

let done = 0
for (const file of files) {
  const name = basename(file, '.png')
  await sharp(join(INPUT_DIR, file))
    .webp({ quality: 80 })
    .toFile(join(OUTPUT_DIR, `${name}.webp`))
  done++
  if (done % 20 === 0) console.log(`  ${done}/${files.length}`)
}

console.log(`Done! ${done} files converted.`)
