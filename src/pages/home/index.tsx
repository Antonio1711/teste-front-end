import { Blog } from "../../components/blog";
import { Brands } from "../../components/brands";
import { Categories } from "../../components/categories";
import { FirstSection } from "../../components/firstSection";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import { Header } from "../../components/header";
import { Products } from "../../components/products";
import { SecondSection } from "../../components/secondSection";
import { SocialMedia } from "../../components/socialMedia";

export function Home() {
    return (
        <>
            <Header />
            <FirstSection />
            <Categories />
            <Products />
            <Brands />
            <SecondSection />
            <Blog />
            <SocialMedia />
            <Form />
            <Footer />
        </>
    )
}