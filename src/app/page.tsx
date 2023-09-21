import HomeTemplate from "@/components/templates/HomeTemplate"
import { Metadata } from "next/types"

export default function Home() {
  return (
    <HomeTemplate />
  )
}

export const metadata: Metadata = {
  title: "CC Shop"
}