import React from 'react';

const page = () => {
    const productData = [
        {
            title: 'KK Indigenous and Wave Guide',
            items: [
                'Amplifiers',
                'Antenna Feeders',
                'Absorber',
                'Bends',
                // ... (other items)
                'VCSO',
                'Waveguide switches',
                'Wide band drive amplifier'
            ]
        }
    ];

    return (
        <main>
            <section className="container py-8">
                <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                    {productData[0].title}
                </h1>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {productData[0].items.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
                        >
                            <div className="space-y-3 py-3">
                                <h1 className="line-clamp-1 text-xl font-bold">{item}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default page;
