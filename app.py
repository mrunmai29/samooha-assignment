import streamlit as st

def get_css():
    with open("main.css") as file:
        css = file.read()
    return css


CUSTOM_UI = """
<iframe src="http://localhost:3000/" width="800" height="1100" style="
    border: none;
"></iframe>
"""


def main():
    st.components.v1.html(CUSTOM_UI)

    css = get_css()
    st.markdown(f"<style>{css}</style>", unsafe_allow_html=True)

if __name__ == "__main__":
    main()
