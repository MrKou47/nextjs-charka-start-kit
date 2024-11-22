"use client"

import { IconButton } from "@chakra-ui/react"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <IconButton aria-label="toggle color mode" onClick={toggleColorMode}>
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </IconButton>
  )
}