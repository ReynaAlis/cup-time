import ContentLoader from "react-content-loader";

export const SkeletonLoader = ({ count = 6 }) => (
    <>
        {Array(count).fill().map((_, index) => (
            <div key={index} className='skeleton-wrapper'>
                <ContentLoader
                    speed={2}
                    viewBox='0 0 420 600'
                    backgroundColor="#6cb9ab"
                    foregroundColor="#64099b">
                    <rect x="0" y="0" width="100%" height="70%" rx="10" ry="10" />
                    <rect x="24" y="calc(70% + 30px)" width="80%" height="30px" rx="5" ry="5" />
                    <rect x="24" y="calc(70% + 80px)" width="40%" height="25px" rx="5" ry="5" />
                </ContentLoader>
            </div>
        ))}
    </>
);