import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { PhoneIcon, MailIcon, UserIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="h-[80vh] flex items-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Support Contact</CardTitle>
            <CardDescription>We're here to help!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <UserIcon className="w-5 h-5 text-muted-foreground" />
              <span>John Doe</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="w-5 h-5 text-muted-foreground" />
              <span>johndoe@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Please contact us for any kind of support, questions, or concerns. We welcome any comments or suggestions to make the site even better!
            </p>
          </CardContent>
        </Card>
    </div>
  )
}