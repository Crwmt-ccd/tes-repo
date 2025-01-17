import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
    const { keyword } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const srcAnime = await response.json()


    return (
        <>
            <section>
                <Header title={`Search ${keyword}.`} />
                <AnimeList api={srcAnime} />
            </section>
        </>
    )
}

export default Page