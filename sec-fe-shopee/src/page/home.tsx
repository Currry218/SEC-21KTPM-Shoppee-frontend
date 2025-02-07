import { Categories } from "../components/features/categories";
import { CrossBar } from "../components/common/crossbar";
import { ProductDisplay } from "../components/features/product_display";
import { HomeLayout } from "../layout/home";

export const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <Categories />
                <CrossBar />
                <ProductDisplay />
            </HomeLayout>
        </>
    );
}