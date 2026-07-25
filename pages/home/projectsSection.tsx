import Carousel from '@/components/Carousel';


export default function projectsSection() {
    return(
        <section className="w-screen h-fit py-10 flex items-center justify-center">
            <div className="bg-background-dark w-1/2 aspect-video rounded-3xl">
                <Carousel />
            </div>
        </section>
    )
}