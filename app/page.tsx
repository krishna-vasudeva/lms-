import {Navigation} from "@/components/navigation"
import { Content } from "@/components/content";
import { Terminal } from "@/components/terminal";
import { Progress } from "@/components/progress";
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background">
      <Navigation />
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 overflow-auto p-4 lg:p-6">
          <Content />
          <div className="mt-6">
            <Terminal />
          </div>
        </div>
        <Progress />
      </div>
    </div>
  );
}
