import React from 'react';
import Link from 'next/link';

const StatCard = (
    { statsCards } 
) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {statsCards.map((stat, index) => (
                <Link href={stat.link} key={index} className="no-underline">
                    <div key={index} className="bg-zinc-100 border border-zinc-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            <span className="text-2xl sm:text-3xl font-bold text-primaryText">
                                {stat.value || 0}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-label">
                            {stat.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default StatCard;