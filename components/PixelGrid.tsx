interface PixelGridProps {
  pixels: number[][]
}

export default function PixelGrid({ pixels }: PixelGridProps) {
  return (
    <div className="inline-grid grid-cols-32 gap-[1px] bg-gray-300 p-[1px]">
      {pixels.map((row, y) =>
        row.map((color, x) => (
          <div
            key={`${x}-${y}`}
            className="aspect-square w-2 sm:w-3 md:w-4"
            style={{ 
              backgroundColor: `#${color.toString(16).padStart(6, '0')}`,
              gridColumn: x + 1,
              gridRow: y + 1
            }}
          />
        ))
      )}
    </div>
  )
}

