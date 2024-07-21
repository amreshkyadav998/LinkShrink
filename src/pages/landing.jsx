import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import banner_page from '../assets/banner1.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

  const [longUrl,setLongUrl] = useState();
  const navigate = useNavigate();

  const handleShorten = (e) =>{
    e.preventDefault()
    if(longUrl)navigate(`/auth?createNew=${longUrl}`);
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-6xl text-white text-center font-extrabold">
        <i>Transform your links effortlessly <br /> with our URL shortener!👇</i>
      </h2>
      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your long URL"
          onChange = {(e) => setLongUrl(e.target.value)}
          className="h-12 flex-1 py-2 px-4" // Adjust padding to fit within the container
        />
        <Button
          className="h-12"
          type="submit"
          variant="destructive"
        >
          Trimm-Url
        </Button>
      </form>
      <img src={banner_page} alt="Banner" />

      <Accordion type="multiple" collapsible className="w-full md:px-11">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does LinkShrink URL work?</AccordionTrigger>
        <AccordionContent>
          When you enter a long URL, our system generates a shorter version of that URL. This shortened URL redirects to the original long URL when accessed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is LinkShrink URL free to use?</AccordionTrigger>
        <AccordionContent>
          Yes, LinkShrink URL is completely free to use for generating shortened URLs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I track the performance of my shortened URLs?</AccordionTrigger>
        <AccordionContent>
          Yes, LinkShrink URL provides analytics to track the performance of your shortened URLs, including the number of clicks and other useful metrics.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How long do shortened URLs last?</AccordionTrigger>
        <AccordionContent>
          Shortened URLs created with LinkShrink URL do not have an expiration date and will last indefinitely unless they are manually deleted by the user.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Is it possible to customize my shortened URLs?</AccordionTrigger>
        <AccordionContent>
          Yes, LinkShrink URL allows you to customize your shortened URLs to make them more recognizable and easier to remember.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Are there any limitations on the number of URLs I can shorten?</AccordionTrigger>
        <AccordionContent>
          No, there are no limitations on the number of URLs you can shorten with LinkShrink URL.
        </AccordionContent>
      </AccordionItem>
      </Accordion>

    </div>
  )
}

export default LandingPage;
