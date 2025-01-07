import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="min-h-screen bg-gray-100 py-16">
      <div class="container mx-auto px-4 max-w-2xl">
        <h1 class="text-4xl font-bold mb-8">Contact Me</h1>
        
        <div class="bg-white rounded-lg shadow-md p-8">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label class="block text-gray-700 mb-2" for="name">Name</label>
              <input
                type="text"
                id="name"
                formControlName="name"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              >
            </div>

            <div>
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input
                type="email"
                id="email"
                formControlName="email"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              >
            </div>

            <div>
              <label class="block text-gray-700 mb-2" for="message">Message</label>
              <textarea
                id="message"
                formControlName="message"
                rows="6"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              [disabled]="!contactForm.valid"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // TODO: Implement form submission
    }
  }
}