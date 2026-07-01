'use client'

interface JahrahLogoProps {
  height?: number
  darkMode?: boolean
}

export function JahrahLogo({ height = 40, darkMode = false }: JahrahLogoProps) {
  const scale = height / 80
  const textColor = darkMode ? '#FFFFFF' : '#1A1A1A'
  const africaColor = darkMode ? '#FFD700' : '#004D00'

  return (
    <svg
      viewBox="0 0 320 80"
      width={320 * scale}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 14 L22 52 Q22 66 36 66 Q44 66 49 60"
        stroke="#FF5722"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M49 60 Q58 50 58 38"
        stroke="#FF5722"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="49" cy="16" r="4.5" fill="#FFD700" />
      <text
        x="76"
        y="54"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="42"
        fontWeight="700"
        letterSpacing="-1"
        fill={textColor}
      >
        JAHRAH
      </text>
      <text
        x="78"
        y="72"
        fontFamily="'Montserrat', Arial, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="4"
        fill={africaColor}
      >
        .AFRICA
      </text>
    </svg>
  )
}
