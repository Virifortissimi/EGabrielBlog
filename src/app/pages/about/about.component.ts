import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="min-h-screen bg-gray-100 py-16">
      <div class="container mx-auto px-4 mt-16">
        <h1 class="text-4xl font-bold mb-8">About Me</h1>
        
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-2xl font-bold mb-4">Background</h2>
          <p class="text-gray-700 mb-4">
            With over 5 years of experience in backend development, I specialize in building 
            robust and scalable systems that power modern applications. My journey in software 
            development started with a passion for solving complex problems and has evolved into 
            creating enterprise-level solutions.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Skills & Technologies</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="p-4 border rounded">
              <h3 class="font-semibold">Languages</h3>
              <ul class="list-disc list-inside">
                <li>C#</li>
                <li>JavaScript/TypeScript</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>Go (Golang) </li>
              </ul>
            </div>
            <div class="p-4 border rounded">
              <h3 class="font-semibold">Frameworks</h3>
              <ul class="list-disc list-inside">
                <li>.NET Core/ASP.NET MVC</li>
                <li>Entity Framework Core</li>
                <li>SignalR</li>
                <li>Angular/React</li>
                <li>gRPC</li>
                <li>Dapr</li>
                <li>xUnit/Moq</li>
                <li>Kafka/RabbitMQ</li>
              </ul>
            </div>
            <div class="p-4 border rounded">
              <h3 class="font-semibold">Tools</h3>
              <ul class="list-disc list-inside">
                <li>Azure/AWS</li>
                <li>Docker/Kubernetes</li>
                <li>Git/GitHub/GitLab/Bitbucket</li>
                <li>Redis</li>
                <li>Jira/Asana/Trello</li>
                <li>Postman</li>
                <li>Swagger/OpenAPI</li>
                <li>Visual Studio/VS Code/Rider</li>
                <li>SQL Server/MySQL/PostgreSQL/MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})


export class AboutComponent {
  // Component logic
}