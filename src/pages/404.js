import Layout from "@components/Layout/Layout";
import PropTypes from "prop-types";

export default function NotFound() {
  return (
    <div className="w-full bg-transparent relative overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "oops - Page not found",
          description: "give any description here",
        }}
      >
        <h1>Page not found</h1>
      </Layout>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  pageMeta: PropTypes.object,
};
