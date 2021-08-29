import Footer from '@components/Footer';

export default function MainLayout(props) {
  return (
    <>
      {/*<Header />*/}
      <main id="main_content">{props.children}</main>
      <Footer />
    </>
  );
}
