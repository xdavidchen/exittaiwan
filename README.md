# ExitTaiwan

## 🚀 Getting Started

First you need to [clone](https://github.com/zeon-studio/repo_name) your repository and install the dependencies:

```bash
git clone https://github.com/zeon-studio/repo_name
cd repo_name
```

### ⚙️ Prerequisites

To start using this template, you need to have some prerequisites installed on your machine.

- [Hugo Extended v0.144+](https://gohugo.io/installation/)
- [Node v22+](https://nodejs.org/en/download/)
- [Go v1.24+](https://go.dev/doc/install)

### 👉 Install Dependencies

Install all the dependencies using the following command.

```bash
npm install
```

### 👉 Development Command

Start the development server using the following command.

```bash
npm run dev
```

---

## 📝 Content Customization

### 👉 Site Config

You can change the site title, base URL, language, theme, plugins, and more from the `hugo.toml` file.

### 👉 Site Params

You can customize all the parameters from the `config/_default/params.toml` file. This includes the logo, favicon, search, SEO metadata, newslatter submission, contact form submission and more.

### Page header Customization

You can change page header configuration from the  `config/_default/params.toml` file.

```toml
# Page Header
[page_header]
enable = true
bg_color_lightmode = "#e9fff8"
text_color_lightmode = "#000"
bg_color_darkmode = "#384343"
text_color_darkmode = "#fff"
```

### 👉 Customize Menu

You can change the menu from the `config/_default/menus.toml` file.

if you want to add new item in menu then add it like:
```toml
[[main]]
name = "Blog"
url = "posts"
weight = 100

```
if you want to add sub menu then add it like:
```toml
[[main]]
weight = 4
name = "Pages"

[[main]]
parent = "Pages"
name = "Blog"
url = "/blog"
```

if you want to add more country in submenu then add it like:
```toml
[[main]]
parent = "文章"
name = "冰島"
url = "country/冰島"
```

### Newslatter and Contact form Customization

You can change the newslatter configuration from the `config/_default/params.toml` file.

```toml
contact_form_action = "https://formsubmit.co/contact@exittaiwan.com" 
newsletter = "https://formsubmit.co/contact@exittaiwan.com"
```

if you want to change the form service provider you just need to change the `contact_form_action` and `newsletter` value with the form service provider url.

### 👉 Colors and Fonts

You can change the colors and fonts from the `data/theme.json` file. This includes the primary color, secondary color, font family, and font size.
Primary font use for body and secondary font use for heading.

### 👉 Social Links

You can change the social links from the `data/social.json` file. Add your social links here, and they will automatically be displayed on the site.

### Use Button in blog post

You can use the following code to add a button in your blog post:

```markdown
{{< button label="所有文章" link="/posts" style="solid" >}}

### Use other shortcodes

if you want to use other shortcodes you can check the `content/zh/pages/elements.md` file.

## Update Content

You can update the content from the `content/zh` directory. This includes the posts, pages, and other content.
```

---

## 🛠 Advanced Usage

We have added some custom scripts to make your life easier. You can use these scripts to help you with your development.

### 👉 Update Modules

We have added a lot of modules to this template. You can update all the modules using the following command.

```bash
npm run update-modules
```

---

## 🚀 Build And Deploy

After you finish your development, you can build or deploy your project almost everywhere. Let's see the process:

### 👉 Build Command

To build your project locally, you can use the following command.

```bash
npm run build
```

### 👉 Deploy Site

We have provided 5 different deploy platform configurations with this template, so you can deploy easily.

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Github Actions](https://github.com/features/actions)
- [Gitlab Ci](https://docs.gitlab.com/ee/ci/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

And if you want to Host some other hosting platforms. then you can build your project, and you will get a `public` folder. that you can copy and paste on your hosting platform.

> **Note:** You must change the `baseURL` in the `hugo.toml` file. Otherwise, your site will not work properly.

---
