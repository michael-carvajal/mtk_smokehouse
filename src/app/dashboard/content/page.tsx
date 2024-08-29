'use client'
import Link from "next/link"
import { Edit } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Checkbox } from "~/components/ui/checkbox"

import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { useState } from "react"

export default function Dashboard() {
  const [featureOneLink, setFeatureOneLink] = useState("SHOP FOR GOLD LABEL SMOKED SALMON")
  const [isEditting, setisEditting] = useState(false)
  const handleSave = () => {

  }

  const handleLinkChange = (e, setFeatureLink) => {
    setFeatureLink(e.target.value)
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#" className="font-semibold text-primary">
              Home Page
            </Link>
            <Link href="#">Our Roots</Link>
            <Link href="#">Contact / Locations</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Featured 1</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-col flex-1 gap-7 max-w-72'>
                  <div className='flex justify-center items-center h-60 my-0 mt-4 rounded mx-auto bg-red-400 w-full'>Imgage</div>
                  <h4>SMOKEHOUSE GOLD LABEL</h4>
                  <div className='text-xs font-semibold text-slate-400 '>Our Gold Label is what made MT. Kisco Smokehouse what it is today. With its rich, buttery texture and sweet lacing of fruit-wood smoke, it accounts for most of our smoked salmon sales. Smoked with the perfect blend of apple and cherry woods, our salmon is praised for its delicate smoked flavor and silky texture. Our salmon comes from the best aquaculture farms located in the the icy Northern Atlantic off the coast of Scotland. We receive daily deliveries of fresh Atlantic salmon flown in directly from the farms fresh, never frozen, giving it an amazingly silky texture, and rich, deep orange color.</div>
                  <div className="w-full flex gap-8 relative">
                    {isEditting ? <Button variant='ghost' className='text-slate-600 w-full relative'>
                      <Input value={featureOneLink} onChange={(e) => handleLinkChange(e, setFeatureOneLink)} />
                    </Button> : <Link href='#'><Button variant='ghost' className='text-slate-600'>{featureOneLink}</Button></Link>
                    }
                    <Edit onClick={() => setisEditting(!isEditting)} className="absolute -right-12 cursor-pointer" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button onClick={handleSave}>Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Plugins Directory</CardTitle>
                <CardDescription>
                  The directory within your project, in which your plugins are
                  located.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    placeholder="Project Name"
                    defaultValue="/content/plugins"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Allow administrators to change the directory.
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
