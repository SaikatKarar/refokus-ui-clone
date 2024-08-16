import logo from '../assets/img/refokus_logo.svg'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import Button from './Button'


export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header>
            <nav aria-label="Global" className="mx-auto py-6 flex max-w-screen-lg items-center justify-between px-8 border-b-[1px] border-zinc-700">
                <div className='n-left flex items-center'>

                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Refokus</span>
                        <img alt="" src={logo} className="h-8 w-auto" />
                    </a>


                    <div className="hidden lg:flex lg:gap-14 lg:ml-20">
                        {["Home", "Work", "Culture", "", "News"].map((elem, idx) => (
                            elem.length === 0 ? <span key={idx} className='w-[2px] h-7 bg-zinc-700'></span> : <a key={idx} className='text-sm flex items-center justify-center gap-2' href='#'>
                                {idx === 1 && (<span style={{ boxShadow: "0 0 0.45em #00ff19" }} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>)}
                                {elem}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block">
                    <Button />
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">refokus</span>
                            <img
                                alt=""
                                src={logo}
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">


                                {["Home", "Work", "Culture", "News"].map((elem, idx) => (
                                    <a
                                        href="#" key={idx}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {elem}
                                    </a>
                                ))}
                            </div>

                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
