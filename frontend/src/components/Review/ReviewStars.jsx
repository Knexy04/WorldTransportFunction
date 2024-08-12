import Star from "../../images/star.svg";
import { useState } from "react";



const ReviewStars = ({ selectedstars, setSelectedStars }) => {

  return (
    <div className="flex">
      <svg
        onClick={() => setSelectedStars(1)}  
        width="15"
        height="15"
        viewBox="0 0 12 12"
        fill={selectedstars >= 1 ? 'rgba(255, 183, 44, 1)' : 'none'}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d="M6.35009 1.77855L7.48581 4.07141C7.51164 4.1296 7.55227 4.18001 7.60366 4.21761C7.65504 4.25521 7.71538 4.27868 7.77866 4.28569L10.2858 4.65712C10.3584 4.66645 10.4268 4.69624 10.4831 4.74302C10.5394 4.78979 10.5813 4.85162 10.6037 4.92127C10.6262 4.99093 10.6284 5.06554 10.61 5.13639C10.5917 5.20724 10.5536 5.27141 10.5001 5.32141L8.69295 7.11426C8.64683 7.15735 8.61221 7.21129 8.59225 7.27117C8.57229 7.33105 8.56762 7.39497 8.57866 7.45712L9.01438 9.97855C9.02699 10.051 9.01902 10.1255 8.99136 10.1937C8.96371 10.2618 8.91748 10.3208 8.85794 10.364C8.7984 10.4072 8.72794 10.4328 8.65457 10.4379C8.58121 10.443 8.50789 10.4274 8.44295 10.3928L6.18581 9.19998C6.12801 9.1716 6.06448 9.15685 6.00009 9.15685C5.93571 9.15685 5.87218 9.1716 5.81438 9.19998L3.55724 10.3928C3.4923 10.4274 3.41898 10.443 3.34561 10.4379C3.27225 10.4328 3.20179 10.4072 3.14225 10.364C3.08271 10.3208 3.03648 10.2618 3.00882 10.1937C2.98117 10.1255 2.97319 10.051 2.98581 9.97855L3.42152 7.42855C3.43256 7.3664 3.42789 7.30248 3.40793 7.2426C3.38797 7.18272 3.35336 7.12878 3.30724 7.08569L1.47866 5.32141C1.42457 5.27005 1.38652 5.2041 1.36914 5.13156C1.35176 5.05902 1.35578 4.98299 1.38073 4.91269C1.40567 4.84239 1.45047 4.78083 1.50969 4.73547C1.56891 4.69011 1.64001 4.66289 1.71438 4.65712L4.22152 4.28569C4.28481 4.27868 4.34515 4.25521 4.39653 4.21761C4.44792 4.18001 4.48855 4.1296 4.51438 4.07141L5.65009 1.77855C5.68102 1.71177 5.73041 1.65523 5.79242 1.61561C5.85444 1.57599 5.9265 1.55493 6.00009 1.55493C6.07369 1.55493 6.14574 1.57599 6.20776 1.61561C6.26978 1.65523 6.31917 1.71177 6.35009 1.77855V1.77855Z"
          stroke={selectedstars >= 1 ? '#ffb72c' : "#8D8A8A"}
          stroke-width="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        onClick={() => setSelectedStars(2)} 
        width="15"
        height="15"
        viewBox="0 0 12 12"
        fill={selectedstars >= 2 ? '#ffb72c' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.35009 1.77855L7.48581 4.07141C7.51164 4.1296 7.55227 4.18001 7.60366 4.21761C7.65504 4.25521 7.71538 4.27868 7.77866 4.28569L10.2858 4.65712C10.3584 4.66645 10.4268 4.69624 10.4831 4.74302C10.5394 4.78979 10.5813 4.85162 10.6037 4.92127C10.6262 4.99093 10.6284 5.06554 10.61 5.13639C10.5917 5.20724 10.5536 5.27141 10.5001 5.32141L8.69295 7.11426C8.64683 7.15735 8.61221 7.21129 8.59225 7.27117C8.57229 7.33105 8.56762 7.39497 8.57866 7.45712L9.01438 9.97855C9.02699 10.051 9.01902 10.1255 8.99136 10.1937C8.96371 10.2618 8.91748 10.3208 8.85794 10.364C8.7984 10.4072 8.72794 10.4328 8.65457 10.4379C8.58121 10.443 8.50789 10.4274 8.44295 10.3928L6.18581 9.19998C6.12801 9.1716 6.06448 9.15685 6.00009 9.15685C5.93571 9.15685 5.87218 9.1716 5.81438 9.19998L3.55724 10.3928C3.4923 10.4274 3.41898 10.443 3.34561 10.4379C3.27225 10.4328 3.20179 10.4072 3.14225 10.364C3.08271 10.3208 3.03648 10.2618 3.00882 10.1937C2.98117 10.1255 2.97319 10.051 2.98581 9.97855L3.42152 7.42855C3.43256 7.3664 3.42789 7.30248 3.40793 7.2426C3.38797 7.18272 3.35336 7.12878 3.30724 7.08569L1.47866 5.32141C1.42457 5.27005 1.38652 5.2041 1.36914 5.13156C1.35176 5.05902 1.35578 4.98299 1.38073 4.91269C1.40567 4.84239 1.45047 4.78083 1.50969 4.73547C1.56891 4.69011 1.64001 4.66289 1.71438 4.65712L4.22152 4.28569C4.28481 4.27868 4.34515 4.25521 4.39653 4.21761C4.44792 4.18001 4.48855 4.1296 4.51438 4.07141L5.65009 1.77855C5.68102 1.71177 5.73041 1.65523 5.79242 1.61561C5.85444 1.57599 5.9265 1.55493 6.00009 1.55493C6.07369 1.55493 6.14574 1.57599 6.20776 1.61561C6.26978 1.65523 6.31917 1.71177 6.35009 1.77855V1.77855Z"
          stroke={selectedstars >= 2 ? '#ffb72c' : "#8D8A8A"}
          stroke-width="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        onClick={() => setSelectedStars(3)} 
        width="15"
        height="15"
        viewBox="0 0 12 12"
        fill={selectedstars >= 3 ? '#ffb72c' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.35009 1.77855L7.48581 4.07141C7.51164 4.1296 7.55227 4.18001 7.60366 4.21761C7.65504 4.25521 7.71538 4.27868 7.77866 4.28569L10.2858 4.65712C10.3584 4.66645 10.4268 4.69624 10.4831 4.74302C10.5394 4.78979 10.5813 4.85162 10.6037 4.92127C10.6262 4.99093 10.6284 5.06554 10.61 5.13639C10.5917 5.20724 10.5536 5.27141 10.5001 5.32141L8.69295 7.11426C8.64683 7.15735 8.61221 7.21129 8.59225 7.27117C8.57229 7.33105 8.56762 7.39497 8.57866 7.45712L9.01438 9.97855C9.02699 10.051 9.01902 10.1255 8.99136 10.1937C8.96371 10.2618 8.91748 10.3208 8.85794 10.364C8.7984 10.4072 8.72794 10.4328 8.65457 10.4379C8.58121 10.443 8.50789 10.4274 8.44295 10.3928L6.18581 9.19998C6.12801 9.1716 6.06448 9.15685 6.00009 9.15685C5.93571 9.15685 5.87218 9.1716 5.81438 9.19998L3.55724 10.3928C3.4923 10.4274 3.41898 10.443 3.34561 10.4379C3.27225 10.4328 3.20179 10.4072 3.14225 10.364C3.08271 10.3208 3.03648 10.2618 3.00882 10.1937C2.98117 10.1255 2.97319 10.051 2.98581 9.97855L3.42152 7.42855C3.43256 7.3664 3.42789 7.30248 3.40793 7.2426C3.38797 7.18272 3.35336 7.12878 3.30724 7.08569L1.47866 5.32141C1.42457 5.27005 1.38652 5.2041 1.36914 5.13156C1.35176 5.05902 1.35578 4.98299 1.38073 4.91269C1.40567 4.84239 1.45047 4.78083 1.50969 4.73547C1.56891 4.69011 1.64001 4.66289 1.71438 4.65712L4.22152 4.28569C4.28481 4.27868 4.34515 4.25521 4.39653 4.21761C4.44792 4.18001 4.48855 4.1296 4.51438 4.07141L5.65009 1.77855C5.68102 1.71177 5.73041 1.65523 5.79242 1.61561C5.85444 1.57599 5.9265 1.55493 6.00009 1.55493C6.07369 1.55493 6.14574 1.57599 6.20776 1.61561C6.26978 1.65523 6.31917 1.71177 6.35009 1.77855V1.77855Z"
          stroke={selectedstars >= 3 ? '#ffb72c' : "#8D8A8A"}
          stroke-width="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        onClick={() => setSelectedStars(4)} 
        width="15"
        height="15"
        viewBox="0 0 12 12"
        fill={selectedstars >= 4 ? 'rgba(255, 183, 44, 1)' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.35009 1.77855L7.48581 4.07141C7.51164 4.1296 7.55227 4.18001 7.60366 4.21761C7.65504 4.25521 7.71538 4.27868 7.77866 4.28569L10.2858 4.65712C10.3584 4.66645 10.4268 4.69624 10.4831 4.74302C10.5394 4.78979 10.5813 4.85162 10.6037 4.92127C10.6262 4.99093 10.6284 5.06554 10.61 5.13639C10.5917 5.20724 10.5536 5.27141 10.5001 5.32141L8.69295 7.11426C8.64683 7.15735 8.61221 7.21129 8.59225 7.27117C8.57229 7.33105 8.56762 7.39497 8.57866 7.45712L9.01438 9.97855C9.02699 10.051 9.01902 10.1255 8.99136 10.1937C8.96371 10.2618 8.91748 10.3208 8.85794 10.364C8.7984 10.4072 8.72794 10.4328 8.65457 10.4379C8.58121 10.443 8.50789 10.4274 8.44295 10.3928L6.18581 9.19998C6.12801 9.1716 6.06448 9.15685 6.00009 9.15685C5.93571 9.15685 5.87218 9.1716 5.81438 9.19998L3.55724 10.3928C3.4923 10.4274 3.41898 10.443 3.34561 10.4379C3.27225 10.4328 3.20179 10.4072 3.14225 10.364C3.08271 10.3208 3.03648 10.2618 3.00882 10.1937C2.98117 10.1255 2.97319 10.051 2.98581 9.97855L3.42152 7.42855C3.43256 7.3664 3.42789 7.30248 3.40793 7.2426C3.38797 7.18272 3.35336 7.12878 3.30724 7.08569L1.47866 5.32141C1.42457 5.27005 1.38652 5.2041 1.36914 5.13156C1.35176 5.05902 1.35578 4.98299 1.38073 4.91269C1.40567 4.84239 1.45047 4.78083 1.50969 4.73547C1.56891 4.69011 1.64001 4.66289 1.71438 4.65712L4.22152 4.28569C4.28481 4.27868 4.34515 4.25521 4.39653 4.21761C4.44792 4.18001 4.48855 4.1296 4.51438 4.07141L5.65009 1.77855C5.68102 1.71177 5.73041 1.65523 5.79242 1.61561C5.85444 1.57599 5.9265 1.55493 6.00009 1.55493C6.07369 1.55493 6.14574 1.57599 6.20776 1.61561C6.26978 1.65523 6.31917 1.71177 6.35009 1.77855V1.77855Z"
          stroke={selectedstars >= 4 ? '#ffb72c' : "#8D8A8A"}
          stroke-width="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        onClick={() => setSelectedStars(5)} 
        width="15"
        height="15"
        viewBox="0 0 12 12"
        fill={selectedstars >= 5 ? 'rgba(255, 183, 44, 1)' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.35009 1.77855L7.48581 4.07141C7.51164 4.1296 7.55227 4.18001 7.60366 4.21761C7.65504 4.25521 7.71538 4.27868 7.77866 4.28569L10.2858 4.65712C10.3584 4.66645 10.4268 4.69624 10.4831 4.74302C10.5394 4.78979 10.5813 4.85162 10.6037 4.92127C10.6262 4.99093 10.6284 5.06554 10.61 5.13639C10.5917 5.20724 10.5536 5.27141 10.5001 5.32141L8.69295 7.11426C8.64683 7.15735 8.61221 7.21129 8.59225 7.27117C8.57229 7.33105 8.56762 7.39497 8.57866 7.45712L9.01438 9.97855C9.02699 10.051 9.01902 10.1255 8.99136 10.1937C8.96371 10.2618 8.91748 10.3208 8.85794 10.364C8.7984 10.4072 8.72794 10.4328 8.65457 10.4379C8.58121 10.443 8.50789 10.4274 8.44295 10.3928L6.18581 9.19998C6.12801 9.1716 6.06448 9.15685 6.00009 9.15685C5.93571 9.15685 5.87218 9.1716 5.81438 9.19998L3.55724 10.3928C3.4923 10.4274 3.41898 10.443 3.34561 10.4379C3.27225 10.4328 3.20179 10.4072 3.14225 10.364C3.08271 10.3208 3.03648 10.2618 3.00882 10.1937C2.98117 10.1255 2.97319 10.051 2.98581 9.97855L3.42152 7.42855C3.43256 7.3664 3.42789 7.30248 3.40793 7.2426C3.38797 7.18272 3.35336 7.12878 3.30724 7.08569L1.47866 5.32141C1.42457 5.27005 1.38652 5.2041 1.36914 5.13156C1.35176 5.05902 1.35578 4.98299 1.38073 4.91269C1.40567 4.84239 1.45047 4.78083 1.50969 4.73547C1.56891 4.69011 1.64001 4.66289 1.71438 4.65712L4.22152 4.28569C4.28481 4.27868 4.34515 4.25521 4.39653 4.21761C4.44792 4.18001 4.48855 4.1296 4.51438 4.07141L5.65009 1.77855C5.68102 1.71177 5.73041 1.65523 5.79242 1.61561C5.85444 1.57599 5.9265 1.55493 6.00009 1.55493C6.07369 1.55493 6.14574 1.57599 6.20776 1.61561C6.26978 1.65523 6.31917 1.71177 6.35009 1.77855V1.77855Z"
          stroke={selectedstars >= 5 ? '#ffb72c' : "#8D8A8A"}
          stroke-width="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ReviewStars;
