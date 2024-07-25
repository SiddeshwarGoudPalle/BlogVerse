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
        "This is Blog1. Greatest shit I have ever seen. Fuck this Blog. I am very confused in developing this website using blockchain",
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

<div class="container bg-white mx-auto px-4 py-8">
  <h1
    class="text-4xl font-bold m-t4 mb-10 text-gray-900 bg-yellow-300 p-10 text-center"
  >
    My Blogs
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20">
    {#each blogs as blog}
      <div
        class="blog bg-gray-100 text-white border p-4 rounded-lg shadow-md m-10 flex flex-col justify-between"
      >
        <a href={`/blog/${blog.id}`} class="no-underline text-black">
          <h2 class="text-xl font-semibold">{blog.title}</h2>
          <p>
            {#if formatContent(blog.content).full.length > formatContent(blog.content).short.length}
              {formatContent(blog.content).short}
              <a href={`/blog/${blog.id}`} class="text-blue-500"> Read more</a>
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
</div>

<style>
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
