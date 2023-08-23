import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import Searchbar from "@/components/shared/Searchbar";
// import Pagination from "@/components/shared/Pagination";
// import CommunityCard from "@/components/cards/CommunityCard";

// import { fetchUser } from "@/lib/actions/user.actions";
// import { fetchCommunities } from "@/lib/actions/community.actions";

async function Page(){
    return (
      <section>
        <h1 className="head-text mb-10">
          Communities
        </h1>
      </section>
    )
  }
  
  export default Page
  