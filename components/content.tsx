import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

export function Content() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
         5G registeration solution
        </h1>
        <p className="text-muted-foreground mt-2">
         when opening the packet you can check that the problem was due to an authentication problem caused ny sync failure 
        </p>
      </div>
      <Card className="p-4 lg:p-6">
        <div className="space-y-4">
          <h2 className="text-lg lg:text-xl font-semibold">Instructions</h2>
          <ul className="list-disc list-inside space-y-2 text-sm lg:text-base">
            <li>
              Before we can continue, Try to discover first the components
              installed on the machine
            </li>
            <li>
              What is the name of the interfaces and IP addresses of the CU and
              the DU?
            </li>
            <li>Ping the CU and then the DU</li>
            <li>Try and ping the MME</li>
            <li>Try and ping another IP like 8.8.8.8</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Use the terminal below to execute these commands and explore the
            system.
          </p>
        </div>
      </Card>
    </div>
  );
}
