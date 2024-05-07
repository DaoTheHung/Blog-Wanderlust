

export default function Page({ params }: { params: { blogId: string } }) {
    
    return <h1>My Page {params.blogId}</h1>
  }