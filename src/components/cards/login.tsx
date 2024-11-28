'use client'
import Link from 'next/link'
import React from 'react'
import { Mark } from '../logo'
import { Button } from '../button'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { Heading } from '../text'

const LoginCard = ({ title = "Welcome back!", description = 'Sign in to your account to continue.' }: { title?: string, description?: string }) => {
  const handleLogin = async (loginType: string) => {
    await signIn('google')
  }
  return (
    <div className="isolate flex min-h-dvh w-full items-center justify-center p-6 lg:p-8">
      <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
        <form action="#" method="POST" className="p-7 sm:p-11">
          <div className="flex items-start">
            <Link href="/" title="Home">
              {/* <Mark className="h-9 fill-black" /> */}
              <h2  className='sm:text-xl text-lg font-semibold'>Famesway</h2>
            </Link>
          </div>
          <h1 className="mt-8 h2-base/6 font-medium">{title}</h1>
          <p className="mt-1 text-sm/5 text-gray-600">
            {description}
          </p>
          {/* <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Email</Label>
              <Input
                required
                autoFocus
                type="email"
                name="email"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Password</Label>
              <Input
                required
                type="password"
                name="password"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <div className="mt-8 flex items-center justify-between text-sm/5">
              <Field className="flex items-center gap-3">
                <Checkbox
                  name="remember-me"
                  className={clsx(
                    'group block size-4 rounded border border-transparent shadow ring-1 ring-black/10 focus:outline-none',
                    'data-[checked]:bg-black data-[checked]:ring-black',
                    'data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-black',
                  )}
                >
                  <CheckIcon className="fill-white opacity-0 group-data-[checked]:opacity-100" />
                </Checkbox>
                <Label>Remember me</Label>
              </Field>
              <Link href="#" className="font-medium hover:text-gray-600">
                Forgot password?
              </Link>
            </div> */}
          <div className="mt-8">
            <Button onClick={() => handleLogin('google')} className='w-full text-zinc-500 h-10 flex gap-1' variant={'outline'}>
              <span>Login with Google </span>
              <FcGoogle />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginCard