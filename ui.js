

marked.setOptions({
    breaks: true,
  });
  const placeholder = 
  `# Welcome to Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }
  class Editor extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
      <div id="editor-panel">
        <div id="editor-header">Editor</div>
      <textarea type="text" value={this.props.value} onChange={this.props.onChange} id="editor" placeholder="Start typing..."/>
        </div>
      );
    }
  }
  
  class Previewer extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
      <div id="preview-panel">
        <div id="preview-header">Preview</div>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.text, { renderer: renderer })}}/>
      </div>
    )}
    
  } 
  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        input: placeholder
      }
      this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event){
      this.setState({
        input: event.target.value
      });
    }
    render(){
      
      return(
        <div id="root">
          <Previewer text={this.state.input}/>
          <Editor value={this.state.input} onChange={this.handleOnChange}/>
        </div>
      );
    }
  }
  ReactDOM.render(<App/>,document.getElementById("app"));

      
