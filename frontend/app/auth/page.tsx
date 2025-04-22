'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"
import { FormEvent } from "react"

export default function SignInPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Add real auth logic here (Clerk or Convex)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">

      <Card className="w-full max-w-md rounded-xl bg-[#1C1C1C] text-white shadow-lg border border-gray-700">
        <CardContent className="p-8 space-y-6">

          {/* Logo + Title */}
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-orange-500">🎙️ OpinionHobe</h1>
            <p className="text-sm text-gray-300">to continue to OpinionHobe</p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              type="button"
              variant="outline"
              className="bg-[#1F1F1F] text-white border border-gray-700 hover:bg-gray-700"
            >
              <Image src={"/icons8-google-48.png"} alt="Google" width={20} height={20} />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="bg-[#1F1F1F] text-white border border-gray-700 hover:bg-gray-700"
            >
              <FaGithub className="w-5 h-5" />
            </Button>
          </div>

          {/* Divider */}
          <div className="space-y-2">
            <Separator />
            <p className="text-sm text-center text-muted-foreground">or continue with email</p>
          </div>

          {/* Email Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-white">Email address</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="bg-[#1F1F1F] border border-gray-700 text-white"
              />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Continue
            </Button>
          </form>

          {/* Footer Links */}
          <div className="text-sm text-center text-gray-400">
            No account?{" "}
            <a href="#" className="text-orange-500 hover:underline">Sign up</a>
          </div>

          <div className="flex justify-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
