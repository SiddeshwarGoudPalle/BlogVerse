<script lang="ts">
  import { goto } from '$app/navigation';
  import custom_axios from '../../axios/AxiosSetup';

  let title = '';
  let genre = '';
  let content = '';
  let price = 0;
  let selectedOption = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted');
    
    const blogData = {
      title,
      genre,
      content,
      price: selectedOption === 'paid' ? price : 0,
      isFree: selectedOption === 'free' // Adjusted to match DTO
    };

    console.log('Blog Data:', blogData);

    try {
      const response = await custom_axios.post('/api/blogs', blogData);
      console.log('Response:', response);

      if (response.status === 201) {
        goto('/MyBlogs');
      } else {
        console.error('Failed to create blog:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<form on:submit={handleSubmit} class="p-8 rounded-lg shadow-md my-2">
  <div class="bg-gray-100 py-8 px-4 mx-auto max-w-screen-xl">
    <h1 class="text-3xl font-bold mb-6 antialiased text-center">Create a New Blog</h1>

    <div class="mb-4">
      <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
      <input type="text" id="title" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" bind:value={title} placeholder="Enter blog title" required>
    </div>


    <div class="mb-4">
      <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content</label>
      <textarea id="content" name="content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64" bind:value={content} placeholder="Enter blog content" required></textarea>
    </div>
    

 

 
    <div class="p-4">
      <div class="flex items-center mb-4">
        <label class="mr-4">
          <input
            type="radio"
            name="pricing"
            value="free"
            bind:group={selectedOption}
            class="mr-2"
            required
          />
          Free (with tip)
        </label>
        <label>
          <input
            type="radio"
            name="pricing"
            value="paid"
            bind:group={selectedOption}
            class="mr-2"
            required
          />
          Paid
        </label>
      </div>
    
      {#if selectedOption === 'paid'}
        <div class="mt-4">
          <input
            type="number"
            id="price"
            name="price"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            bind:value={price}
            placeholder="Enter price in ETH"
            required
          />
        </div>
      {/if}
    </div>

    <div class="mb-4">
      <label for="genre" class="block text-gray-700 text-sm font-bold mb-2">Genre</label>
      <input type="text" id="genre" name="genre" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" bind:value={genre} placeholder="Enter blog genre" required>
    </div>

    <div class="mb-4 items-center">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center">Publish Blog</button>
    </div>
  </div>
</form>
