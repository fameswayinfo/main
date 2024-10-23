import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'
import { useContext, useMemo } from 'react'
import { PricingContext, usePricingContext } from './pricing'
import { classNames } from '@/utils/helper';

export default function Tabs() {
    const { packages, handleChangePackageTab } = usePricingContext();

    const tabs = useMemo(() => {
        return packages.map(({ id, title, current, icon }: any) => ({
            id,
            name: title,
            current,
            Icon: icon,
        }));
    }, [packages]);

    return (
        <div className="max-w-7xl mx-auto pt-7">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    defaultValue={tabs.find((tab) => tab.current)?.name}
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        {tabs.map(({ name, Icon, current, id }) => (
                            <div
                                key={name}
                                aria-current={current ? 'page' : undefined}
                                onClick={() => handleChangePackageTab(id)}
                                className={classNames(
                                    current
                                        ? 'border-pink-500 text-pink-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium cursor-pointer',
                                )}
                            >
                                <Icon
                                    aria-hidden="true"
                                    className={classNames(
                                        current ? 'text-pink-500' : 'text-gray-400 group-hover:text-gray-500',
                                        '-ml-0.5 mr-2 h-5 w-5',
                                    )}
                                />
                                <span>{name}</span>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
