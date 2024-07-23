"use client"
import Image from "next/image"
import Link from "next/link"
import { useToast } from "../../components/ui/use-toast"
import { ToastAction} from "../../components/ui/toast"
import { useRouter } from "next/navigation"
import { Button } from "../../components/ui/button"


const BlogCard = ({ cover, published_date, category, author, title, link, id }) => {

    const { toast } = useToast();
    const router = useRouter();

    const githubClick = () => {
        router.push('https://github.com/jay-sagar')
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (id == 3) {
            toast ({
                title: "Uh oh! Nothing went wrong.",
                description: "This project is not deployed, SORRY!. Check out the GitHub for the source code.",
                action: <ToastAction altText="GitHub" onClick={githubClick}>GitHub</ToastAction>
            })
        } else {
            window.location.href = link; // navigate to the link if the id is not 3
        }
    }

return (
    <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-200/50 dark:border-gray-800/50">
        <Image src={cover} alt="illustration" width={1300} height={1400} className="w-full aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900" />
        <div className="relative p-4 pt-10">
            <div className="absolute right-4 -top-8 bg-blue-600 px-4 py-0.5 flex flex-col">
                <p className="font-bold text-2xl text-white">{published_date.day}</p>
                <p className="text-sm text-gray-200">{published_date.month}</p>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
                <span>{category}</span>
                <span className="relative px-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:h-3 before:w-px before:bg-gray-400" />
                <span>{author}</span>
            </div>
            <h1 className="text-xl my-6 font-semibold text-gray-900 dark:text-white">
                {title}
            </h1>
            <Link href={link} onClick={handleClick} on className="text-blue-600 dark:text-bue-500 transition hover:text-opacity-90 flex items-center gap-x-3 group">
                See the project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 transition-all ease-linear group-hover:ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </Link>
        </div>
    </div>)
}
 
const posts = [
{
    id:1,
    cover:"/rentabuddy.png",
    published_date:{
        day:"05",
        month:"April, 24"
    },
    category:"Full Stack App",
    author:"Next.js, Strapi, Cloudinary, PostgreSQL and Kinde",
    title:"A platform where you can rent you buddies for different kind of activities.",
    link:"https://rentabuddy.vercel.app/"
},
{
    id:2,
    cover:"/aiproject.png",
    published_date:{
        day:"10",
        month:"July, 24"
    },
    category:"Full Stack App",
    author:"Next.js, Drizzle ORM, PostgreSQL, Clerk and Gemini AI",
    title:"Experience realistic interview simulations, personalized feedback, and boost your confidence with our advanced AI-powered mock interviews.",
    link:"https://interview-buddy-ai.vercel.app/"
},
{
    id:3,
    cover:"/secretsapp.png",
    published_date:{
        day:"03",
        month:"Aug, 23"
    },
    category:"Full Stack App",
    author:"Node.js, Express.js. Mongodb, Mongoose, EJS and Google OAuth",
    title:"A platform where you can share your secrets",
    link: "",
},
]
 
const BlogSection = () => {
return (
    <section className="py-8 bg-green-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold border-2 rounded-lg">MY PROJECTS</h1>
                <p className="text-gray-500">
                    Demonstrated my skills by created these projects</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    posts.slice(0,3).map(post=>(
                        <BlogCard key={post.id} {...post}/>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <Link href="https://github.com/jay-sagar/">
                <Button >
                    Click here to see more projects on github
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
                </Link>
                
            </div>
        </div>
    </section>
)
}
export default BlogSection