import Image from "next/image";

export default function Home() {
    return (
        <div className="px-4 font-[family-name:var(--font-geist-sans)]">
            <div className="relative flex flex-row py-32 items-center">
                <div className="font-[family-name:var(--font-bitter)] basis-[550px] bg-outline">
                    <p className="mb-6 text-[80px] leading-[1.0]">
                        Hi, my
                        <br /> name is <b>Ian</b>
                        <span className="text-[#73bbc5]">.</span>
                    </p>
                    <p className="mb-3 text-[24px] leading-[1.6]">
                        I&apos;m a <b>math student / web developer</b> from
                        Vienna, Austria.
                    </p>
                </div>
                <div className="hidden md:block ml-auto mr-[100px] mb-[-20px]">
                    <Image
                        className="brightness-105 bg-wave-clip"
                        src="/me.png"
                        alt="Me"
                        width={500}
                        height={500}
                        draggable={false}
                    />
                </div>
                <div className="absolute w-[700px] h-[150px] background-zigzag -z-10 bottom-[130px] right-0 -translate-y-1/2"></div>
            </div>
        </div>
    );
}
