const user_prompt = `<span style="color: #50fa7b">riven</span><span style="color: #ffffff">@zondervan</span><span style="color: #50fa7b"> ~</span><span style="color: #ffffff">></span>`;
const about = `
  <h3>Story</h3>
  <p>
    I'm an experienced software developer, mostly familiar with C++, Rust, Java. I started coding when I was 10 as a hobby,
    little did I know I would do it for the rest of my life. I've been coding for about 7-8 years now, building up experience along the way.<br><br>

    Within those 7-8 years I have learnt many different kinds of libraries, languages and paradigms. This has led me to be a very self-sufficient and time-efficient programmer.<br><br>

    More recently I started to learn graphics and game development, starting projects such as an open-source
    game engine utilizing C++ and Vulkan, an open-source voxel engine utilizing Rust and Bevy, and many more projects.<br>
  </p>

  <h3>Projects</h3>
  <p>Over the years I've made several public projects on my GitHub, mainly for fun and to give to the community, A couple of these can be found below</p>
  <ul>
    <li>
      <p>
        <a href="https://github.com/therealnv6/vx-gfx">vx-gfx</a><br>
        This is my old open-source attempt at making a Vulkan game engine, however is now no longer maintained. This was my second attempt, 
        however some things went wrong in my pre-made dependency graph that I lined out. 
        Therefore I decided to start from scratch and use proper conventions, including vulkan hpp RAII.
      </p>
    </li>
    <li>
      <p>
        <a href="https://github.com/therealnv6/termrend">termrend</a><br>
        This is a very simple fun project that I made in school because I was bored. It's a simple software terminal renderer, and it can render a couple of 
        polygons, including triangles, rectangles, squares, and more to come. Not actively maintained, I just work on it every now and then.
      </p>
    </li>
  </ul>
`;

const interests = `
  <h3>Interests</h3>
  <ul>
    <li>Unix (Linux, BSD)</li>
    <li>Programming (C++, Rust, Kotlin)</li>
    <li>Rendering (Vulkan, DirectX, OpenGL)</li>
  </ul>
`;

const languages = `
  <h3>Programming Languages</h3>
  <p>In my years of experience I've came across many different programming languages, these include the following:</p>
  <ul>
    <li>
      <p>
        C++<br>
        I started using C++ many years ago, about 6, but stopped using it after a while, simply because it was too hard for me at the time, and I didn't like the syntax. 
        I recently started using C++ again to work on game development, primarily using Vulkan and OpenGL. 
        I have fallen in love with the language and I'm looking to start many more projects utilizing it.
      </p>
    </li>
    <li>
      <p>
        Rust<br>
        I have made many projects in Rust in the past, in many different categories. These include game development utilizing 
        <a href="https://bevyengine.org/">bevy</a> and <a href="https://wgpu.rs/">wgpu-rs</a>, I've also made several different libraries 
        for Rust and have published them on <a href="https://crates.io">crates.io</a>
      </p>
    </li>
    <li>
      <p>
        Java<br>
        I started my programming journey with Java, starting with Minecraft plugins. 
        I have worked for many different servers within the Minecraft community, and I'm extremely experienced in it.
      </p>
    </li>
  </ul> 
`;

const blog_list = `
  <h3>Blogs</h3>
  <ul>
    <li><a class="blog">blog-24/05/2023</a></li>
  </ul>
`;

const blogs = [
  "blog-24-05-2023"
];

interface Command {
    command: string;
    output: string;
}

const terminalElement = document.getElementById("terminal");
const outputElement = document.getElementById("output");

const commands: Command[] = [
    { command: "cat about.md", output: about },
    { command: "cat blogs.md", output: blog_list },
    { command: "cat interests.md", output: interests },
    { command: "cat languages.md", output: languages }
];

document.addEventListener("DOMContentLoaded", function(){
  let index = 0;

  for (const command of commands) {
    processCommand(command.command, index++ == 0);

    const blog_elements = Array.from(outputElement.getElementsByClassName('blog')); 
    let blog_idx = 0;

    blog_elements.forEach(blog => {
      const blog_link = blogs[blog_idx++];

      blog.addEventListener('click', function handleClick(event) {
        processCommand("clear", false);
        processCommand(`cat blogs/${blog_link}`, false)
      });
    });
  }

  scrollToBottom();
});

function processCommand(command: string, fade: boolean) {
  if (command === "clear") {
    outputElement.innerHTML = "";
    return;
  }


  const outputClass = "output";
  const promptClass = fade ? "" : outputClass;

  printPrompt(command, promptClass);

  if (command.includes("blogs/")) {
    printBlog("blog-24-05-2023");
  }

  for (const cmd of commands) {
    if (cmd.command === command) {
      const output = cmd.output;
      outputElement.innerHTML += `<div class="${outputClass}">`.concat(output, "</div>");
    }
  }
}

function printBlog(blog: string) {
  var text: string = "hai";
  fetch(`https://raw.githubusercontent.com/therealnv6/website/main/blog/${text}`)
    .then(response => response.text())
    .then(data => outputElement.innerHTML += data);
}

function printPrompt(command: string, promptClass: string = "") {
  outputElement.innerHTML += `
    <p class = "${promptClass}" style="display: inline-block;">${user_prompt} ${command}</p>
  `;
}

function scrollToBottom() {
  terminalElement?.scroll({
      top: terminalElement.scrollHeight,
      behavior: "smooth"
  });
}
