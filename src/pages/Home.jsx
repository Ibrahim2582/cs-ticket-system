import { useState } from "react";
import CustomerTicket from "../components/home/customerTicket/CustomerTicket";
import Hero from "../components/home/Hero";

const Home = () => {
    const [progessCount, setProgressCount] = useState(0)
    const [resolveCount, setResolveCount] = useState(0)

    return (
        <div>
            <Hero progessCount={progessCount} resolveCount={resolveCount} />
            <CustomerTicket setProgressCount={setProgressCount} setResolveCount={setResolveCount} />
        </div>
    );
};

export default Home;