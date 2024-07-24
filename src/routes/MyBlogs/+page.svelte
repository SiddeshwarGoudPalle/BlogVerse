<!--
<script context="module" lang="ts">
  export let blogs = [];
  export const load = async ({ fetch }) => {
    const res = await fetch('/api/blogs');
    const blogs = await res.json();
    return { blogs };
  };
</script>
-->

<script lang="ts">
  type Blog = {
    id: number;
    title: string;
    preview: string;
    price: number;
    genre: string;
  };

  let blogs: Blog[] = [
    {
      id: 1,
      title: "Blog 1",
      preview:
        "This is Blog1. Greatest shit I have ever seen. Fuck this Blog. I am very confused in developing this website using blockchain",
      price: 0,
      genre: "Technology",
    },
    {
      id: 2,
      title: "Blog 2",
      preview:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
      genre: "Lifestyle",
    },
    {
      id: 3,
      title: "Blog 3",
      preview:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
      genre: "Travel",
    },
    {
      id: 4,
      title: "Blog 4",
      preview:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
      genre: "Health",
    },
    {
      id: 5,
      title: "Blog 5",
      preview:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nisi ratione repudiandae consectetur tempore neque tempora cumque placeat nostrum unde, laborum non, commodi a illo doloremque, voluptatem dignissimos quisquam officia?",
      price: 10,
      genre: "Education",
    },
  ];

  function editBlog(id: number): void {
    // Implement the edit blog functionality here
    console.log(`Edit blog with id ${id}`);
  }

  function deleteBlog(id: number): void {
    // Implement the delete blog functionality here
    console.log(`Delete blog with id ${id}`);
  }
</script>

<div class="container bg-gray-900 mx-auto px-4 py-8">
  <h1
    class="text-4xl font-bold m-t4 mb-10 text-white bg-gray-800 p-10 text-center"
  >
    My Blogs
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20">
    {#each blogs as blog}
      <div
        class="blog bg-white border p-4 rounded-lg shadow-md m-10 flex flex-col justify-between"
      >
        <a href={`/blog/${blog.id}`} class="no-underline text-black">
          <h2 class="text-xl font-semibold">{blog.title}</h2>
          <p>{blog.preview}</p>
          <p class="text-gray-500">Genre: {blog.genre}</p>
          {#if blog.price > 0}
            <p class="text-red-500">Price: {blog.price} Satoshis</p>
          {/if}
          {#if blog.price == 0}
            <p class="text-green-500">Free</p>
          {/if}
        </a>
        <div class="mt-4 flex justify-end gap-4 items-center">
          <button
            type="button"
            class="action-button"
            on:click={() => editBlog(blog.id)}
          >
            <img src="/pencil.svg" alt="Edit" class="w-6 h-6" />
          </button>
          <button
            type="button"
            class="action-button"
            on:click={() => deleteBlog(blog.id)}
          >
            <img src="/trash-can.svg" alt="Delete" class="w-6 h-6" />
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .blog {
    width: 300px;
  }
  a.no-underline {
    text-decoration: none;
  }
  .action-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .action-button:focus {
    outline: 2px solid #000;
  }
  .action-button img {
    pointer-events: none;
  }
</style>
