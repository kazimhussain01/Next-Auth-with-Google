// Make sure the import statement matches the correct file path and component name
import { Dashboard } from "@/app/component/dashboard";

export default function Home() {
  return (
    <div>
      {/* Use the imported component */}
      <Dashboard />
    </div>
  );
}
