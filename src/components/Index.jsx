import React, { useEffect, useRef } from "react";

function Index() {
    const paragraphsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 } // Slightly higher threshold for better visibility
        );

        paragraphsRef.current.forEach((p) => {
            if (p) observer.observe(p);
        });

        return () => {
            paragraphsRef.current.forEach((p) => {
                if (p) observer.unobserve(p);
            });
        };
    }, []);

    return (
        <>
            <div className="index"></div>

            <div className="usa">
                <h1 className="text-center text-light">1. Grand Canyon (USA)</h1>
            </div>
            <div className="usa-des des">
                <p ref={(el) => el && paragraphsRef.current.push(el)}>
                The Grand Canyon, located in Arizona, is a massive geological formation carved by the Colorado River over millions of years. It stretches approximately 446 kilometers (277 miles) in length, up to 29 kilometers (18 miles) in width, and reaches depths of over 1,800 meters (6,000 feet). Its layered red rock formations reveal a rich geological history, attracting millions of visitors annually.
                </p>
            </div>

            <div className="nepal">
                <h1 className="text-center text-light">2. Mount Everest (Nepal/Tibet)</h1>
            </div>
            <div className="nepal-des des">
                <p ref={(el) => el && paragraphsRef.current.push(el)}>
                Mount Everest, standing at 8,848 meters (29,029 feet), is the world's highest peak, located in the Himalayan mountain range between Nepal and Tibet. It has been a significant challenge for mountaineers worldwide and holds profound cultural and spiritual significance for local communities.
                </p>
            </div>

            <div className="artic">
                <h1 className="text-center text-light">3. Northern Lights (Arctic Regions)</h1>
            </div>
            <div className="artic-des des">
                <p ref={(el) => el && paragraphsRef.current.push(el)}>
                The Northern Lights, or Aurora Borealis, are mesmerizing natural light displays predominantly seen in high-latitude regions around the Arctic. They result from collisions between charged solar particles and Earth's atmosphere, creating vibrant displays of green, purple, and blue lights dancing across the night sky.
                </p>
            </div>

            <div className="aus">
                <h1 className="text-center text-light">4. Great Barrier Reef (Australia)</h1>
            </div>
            <div className="aus-des des">
                <p ref={(el) => el && paragraphsRef.current.push(el)}>
                The Great Barrier Reef, located off Queensland's coast, is the world's largest coral reef system, comprising over 2,900 individual reefs and 900 islands, stretching over 2,300 kilometers (1,400 miles). It is renowned for its rich biodiversity, including various corals, fish species, and other marine life, making it a UNESCO World Heritage site and a popular destination for divers and tourists.
                </p>
            </div>

            <div className="zim">
                <h1 className="text-center text-light">5. Victoria Falls (Zimbabwe/Zambia)</h1>
            </div>
            <div className="zim-des des">
                <p ref={(el) => el && paragraphsRef.current.push(el)}>
                    Victoria Falls, known locally as "Mosi-oa-Tunya" or "The Smoke that Thunders," is one of the world's largest and most impressive waterfalls. Spanning approximately 1.7 kilometers (1.1 miles) wide, the Zambezi River plunges over 100 meters (328 feet) into a gorge, creating a mist visible from miles away.
                </p>
            </div>

            <div className="isr">
                <h1 className="text-center text-light">6. Dead Sea (Israel/Jordan)</h1>
            </div>
            <div className="isr-des des">
                <p ref={(el) => el && paragraphsRef.current.push(el)}>
                    The Dead Sea is a salt lake bordered by Jordan to the east and Israel and Palestine to the west. Its surface and shores are the Earth's lowest elevation on land, at about 430 meters (1,411 feet) below sea level. The lake's high salinity allows swimmers to float effortlessly and has been a source of various health and cosmetic products.
                </p>
            </div>

            <div className="tur">
                <h1 className="text-center text-light">7. Pamukkale (Turkey)</h1>
            </div>
            <div className="tur-des des">
                <p ref={(el) => el && paragraphsRef.current.push(el)}>
                    Pamukkale, meaning "Cotton Castle" in Turkish, is a natural site in southwestern Turkey known for its white terraces of travertine, a sedimentary rock deposited by mineral-rich thermal waters. For thousands of years, people have bathed in these thermal pools, which are also the site of the ancient Greco-Roman city of Hierapolis.
                </p>
            </div>
        </>
    );
}

export default Index;
