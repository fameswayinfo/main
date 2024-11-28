'use client'
import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from "next-auth/react";
import LoginCard from '@/components/cards/login'


// import { signIn } from "@/auth";

// export const metadata: Metadata = {
//   title: 'Login',
//   description: 'Sign in to your account to continue.',
// }

export default function Login() {

  const handleLogin = async (loginType: string) => {
    await signIn('google')
  }

  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <LoginCard />
    </main>
  )
}

// import { signIn } from "@/auth";

// const LoginPage = () => {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signIn("google");
//       }}
//     >
//       <button type="submit">Login with Google</button>
//     </form>
//   );
// };

// export default LoginPage;