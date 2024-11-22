function ChildComponent({title,description}){
return(
<div>
<h1>{title}</h1>
<p>{description}</p>    
</div>    
)    
}


export default function ParentComponent(){
return(
<>
<ChildComponent title="ini title" description="ini description"/>
</>
);    
}
