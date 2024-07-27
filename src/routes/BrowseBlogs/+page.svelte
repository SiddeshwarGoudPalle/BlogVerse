<script lang="ts">
  type Blog = {
    id: number;
    title: string;
    content: string;
    price: number;
  };

  let blogs: Blog[] = [
    {
      id: 1,
      title: "Blog 1",
      content:
        "Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:bg-cyan-600 to only apply the bg-cyan-600 utility on hover.",
      price: 0,
    },
    {
      id: 2,
      title: "Blog 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
    },
    {
      id: 3,
      title: "Blog 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
    },
    {
      id: 4,
      title: "Blog 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
    },
    {
      id: 5,
      title: "Blog 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
    },
  ];

  function formatContent(content: string): { short: string; full: string } {
    const words = content.split(" ");
    if (words.length > 50) {
      return {
        short: words.slice(0, 50).join(" ") + "...",
        full: content,
      };
    }
    return {
      short: content,
      full: content,
    };
  }

</script>

<section class="p-6 rounded-lg shadow-md my-2 ">
  <div class="p-6">
    
  <h1 class="text-3xl font-bold mb-6 text-center">Blog List</h1>
  
  <div class="mb-6 flex flex-col md:flex-row items-center justify-between">
    <input 
      type="text" 
      placeholder="Search blogs..." 
      class="p-2 border border-gray-300 rounded-lg mb-4 md:mb-0 md:flex-grow contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
    />
  <div class="mb-0 flex flex-col md:flex-row items-center justify-between">
    <select 
      class="p-2 border border-gray-300 rounded-lg appearance-none w-full md:w-auto">
      <option value="">Sort by</option>
      <option value="">category</option>
      <option value="popularity">Popularity</option>
      <option value="price">Price</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
      </svg>
    </div>
  </div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20">
  {#each blogs as blog}
    <div
      class="blog bg-gray-100 text-white border p-4 rounded-lg shadow-md m-10 flex flex-col justify-between"
    >
      <a href={`/blog/${blog.id}`} class="no-underline text-black">
        <h2 class="text-xl font-semibold">{blog.title}</h2>
        <span></span>
        <p>
          {#if formatContent(blog.content).full.length > formatContent(blog.content).short.length}
            {formatContent(blog.content).short}
            <a href={`/BlogPage/${blog.id}`} class="text-blue-500"> Read more</a>
          {:else}
            {formatContent(blog.content).full}
          {/if}
        </p>
        <div class="bottom-info">
          {#if blog.price > 0}
            <p class="text-red-500">Price: {blog.price} Satoshis</p>
          {/if}
          {#if blog.price == 0}
            <p class="text-green-500">Free</p>
          {/if}
        </div>
      </a>
    </div>
  {/each}
</div>

</section>


<style>

  section {
    max-width: 1200px;
    margin: 0 auto;
  }
  .blog {
    width: 300px;
    position: relative;
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .blog:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  a.no-underline {
    text-decoration: none;
  }

  .bottom-info {
    margin-top: auto;
  }

  .text-blue-500 {
    color: #3b82f6;
  }
</style>