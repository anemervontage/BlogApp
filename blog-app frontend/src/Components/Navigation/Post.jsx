import './Post.css'
import './Posts.css'
export default function Post({Title, Author, Blog}) {
  return (
<body>
{/* <div class="card">
  <div class="container">
    <h4 className='title' styel><b>Jane Doe</b></h4> 
    <h5><h4 className='author'><b>dumm</b></h4> </h5>
    <p className='content'>Interior Designer</p> 
  </div>
</div> */}
<div class="code-editor">
      <div class="header">
        <span class="title">{Title}</span>
      </div>
      <div class="editor-content">
        <code class="code">
          <p><span class="color-0">.<span className='author'>{Author}</span> </span> <span><span>{'{'}</span></span></p>

          <p class="property" ><span>/* </span>
            <span className='content'>{Blog}</span>
            <span> */</span>
            </p>
          <span>{'}'}</span>
        </code>
      </div>
    </div>
</body>
  )
}
