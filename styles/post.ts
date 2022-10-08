import styled from "styled-components";

export const PostsList = styled.ol`
  list-style: decimal-leading-zero;
`;

export const Post = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  .points {
    color: red;
    min-width: 30px;
  }
  a {
    margin: 4px;
  }
  .url {
    font-size: 10px;
    color: grey;
  }
  .author {
    color: grey;
    margin: 4px;
  }
`;
