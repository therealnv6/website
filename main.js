var user_prompt = "<span style=\"color: green\">riven</span><span style=\"color: white\">@rust</span><span style=\"color: green\"> ~</span><span style=\"color: white\">></span>";
var about = "\n  <h3>Story</h3>\n  <p>\n    I'm an experienced software developer, mostly familiar with C++, Rust, Java. I started coding when I was 10 as a hobby,\n    little did I know I would do it for the rest of my life. I've been coding for about 7-8 years now, building up experience along the way.<br><br>\n\n    Within those 7-8 years I have learnt many different kinds of libraries, languages and paradigms. This has led me to be a very self-sufficient and time-efficient programmer.<br><br>\n\n    More recently I started to learn graphics and game development, starting projects such as an open-source\n    game engine utilizing C++ and Vulkan, an open-source voxel engine utilizing Rust and Bevy, and many more projects.<br>\n  </p>\n\n  <h3>Projects</h3>\n  <p>Over the years I've made several public projects on my GitHub, mainly for fun and to give to the community, A couple of these can be found below</p>\n  <ul>\n    <li>\n      <p>\n        <a href=\"https://github.com/therealnv6/vx-gfx\">vx-gfx</a><br>\n        This is my old open-source attempt at making a Vulkan game engine, however is now no longer maintained. This was my second attempt, \n        however some things went wrong in my pre-made dependency graph that I lined out. \n        Therefore I decided to start from scratch and use proper conventions, including vulkan hpp RAII.\n      </p>\n    </li>\n    <li>\n      <p>\n        <a href=\"https://github.com/therealnv6/termrend\">termrend</a><br>\n        This is a very simple fun project that I made in school because I was bored. It's a simple software terminal renderer, and it can render a couple of \n        polygons, including triangles, rectangles, squares, and more to come. Not actively maintained, I just work on it every now and then.\n      </p>\n    </li>\n  </ul>\n";
var interests = "\n  <h3>Interests</h3>\n  <ul>\n    <li>Unix (Linux, BSD)</li>\n    <li>Programming (C++, Rust, Kotlin)</li>\n    <li>Rendering (Vulkan, DirectX, OpenGL)</li>\n  </ul>\n";
var languages = "\n  <h3>Programming Languages</h3>\n  <p>In my years of experience I've came across many different programming languages, these include the following:</p>\n  <ul>\n    <li>\n      <p>\n        C++<br>\n        I started using C++ many years ago, about 6, but stopped using it after a while, simply because it was too hard for me at the time, and I didn't like the syntax. \n        I recently started using C++ again to work on game development, primarily using Vulkan and OpenGL. \n        I have fallen in love with the language and I'm looking to start many more projects utilizing it.\n      </p>\n    </li>\n    <li>\n      <p>\n        Rust<br>\n        I have made many projects in Rust in the past, in many different categories. These include game development utilizing \n        <a href=\"https://bevyengine.org/\">bevy</a> and <a href=\"https://wgpu.rs/\">wgpu-rs</a>, I've also made several different libraries \n        for Rust and have published them on <a href=\"https://crates.io\">crates.io</a>\n      </p>\n    </li>\n    <li>\n      <p>\n        Java<br>\n        I started my programming journey with Java, starting with Minecraft plugins. \n        I have worked for many different servers within the Minecraft community, and I'm extremely experienced in it.\n      </p>\n    </li>\n  </ul> \n";
var terminalElement = document.getElementById("terminal");
var commands = [
    { command: "cat about.md", output: about },
    { command: "cat interests.md", output: interests },
    { command: "cat languages.md", output: languages }
];
document.addEventListener("DOMContentLoaded", function () {
    var outputElement = document.getElementById("output");
    var index = 0;
    for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
        var command = commands_1[_i];
        var output = processCommand(command.command);
        var outputClass = "output";
        var promptClass = index == 0 ? "" : outputClass;
        index++;
        outputElement.innerHTML += "\n      <p class = \"".concat(promptClass, "\" style=\"display: inline-block;\">").concat(user_prompt, " ").concat(command.command, "</p>\n    ");
        outputElement.innerHTML += "<div class=\"".concat(outputClass, "\">").concat(output, "</div>");
    }
    scrollToBottom();
});
function processCommand(command) {
    for (var _i = 0, commands_2 = commands; _i < commands_2.length; _i++) {
        var cmd = commands_2[_i];
        if (cmd.command === command) {
            return cmd.output;
        }
    }
}
function scrollToBottom() {
    terminalElement === null || terminalElement === void 0 ? void 0 : terminalElement.scroll({
        top: terminalElement.scrollHeight,
        behavior: "smooth"
    });
}
var elements = document.querySelectorAll('.output');
var durationIncrement = 0.3;
