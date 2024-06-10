import Link from "next/link";
const ThiagoDesign = {
    LinkDesign: " bg-red-500 hover:bg-blue-300",
}
export default function NavBar() {
  return (
    <>
      <nav className="bg-gradient-radial h-16 flex items-center justify-around ">
        
        <Link href="/" className= {ThiagoDesign.LinkDesign}>Home</Link>
        <Link href="/" className= {ThiagoDesign.LinkDesign}>Home</Link>
        <Link href="/" className= {ThiagoDesign.LinkDesign}>Home</Link>
        <Link href="/" className= {ThiagoDesign.LinkDesign}>Home</Link>
        
      </nav>
    </>
  );
}
