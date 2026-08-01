import Carousel from '@/components/Carousel';


export default function projectsSection() {
    return(
        <section className="w-full h-fit py-10 px-4 sm:px-8 flex items-center justify-center">
            <div className="bg-background-dark w-full sm:w-4/5 lg:w-1/2 aspect-video rounded-3xl">
                <Carousel />
            </div>
        </section>
    )
}