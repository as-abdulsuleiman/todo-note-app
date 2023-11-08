/** @format */

export default function Home() {
  const handleCreateProject = () => {
    fetch("/api/project/create-project", {
      method: "POST",
    });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-6xl">Say To Hello Settings Page</div>
    </div>
  );
}
