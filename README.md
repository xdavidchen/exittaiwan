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

## Mailchimp Newslatter

To connect your newsletter form to Mailchimp, you’ll need two values:

1. `mailchimp_form_action`  
2. `mailchimp_form_name`

### Step-by-Step Guide:

1. **Log into Mailchimp**  
   Go to [mailchimp.com](https://mailchimp.com) and log into your account.

2. **Go to Your Audience**  
   Click on **Audience** from the left-hand menu.  
   If you have more than one audience, choose the correct one.

3. **Create or View Signup Form**  
   - Click on **Signup forms** > **Embedded forms**.
   - Customize the form if you want.
   - Copy the **embed code** shown in the box.

4. **Extract the Info from the Embed Code**  
   Look for something like this in the embed code:

   ```html
   <form action="https://gmail.us16.list-manage.com/subscribe/post?u=c1d6227ee0ca00a18e4cdac71&id=347604ba0d&f_id=00fdc2e1f0" method="post">
       <input type="hidden" name="b_c1d6227ee0ca00a18e4cdac71_347604ba0d" tabindex="-1" value="">
   </form>
   ```

   - The **form action URL** is your `mailchimp_form_action`  
     → Example:  
     `https://gmail.us16.list-manage.com/subscribe/post?u=c1d6227ee0ca00a18e4cdac71&id=347604ba0d&f_id=00fdc2e1f0`

   - The **name of the hidden input field** is your `mailchimp_form_name`  
     → Example:  
     `b_c1d6227ee0ca00a18e4cdac71_347604ba0d`

### ✅ Use These in Your Settings

Replace your current values with the ones you just copied.

```toml
mailchimp_form_action = "YOUR_FORM_ACTION_URL"
mailchimp_form_name = "YOUR_FORM_NAME"
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
