from flask import Flask, render_template, json

app = Flask(__name__)

# Load JSON data
with open('static/concepts.json') as f:
    concepts_data = json.load(f)

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/learn')
def learn():
    return render_template('learn.html')

@app.route('/concept<int:concept_id>')
def concept(concept_id):
    concept = None
    for c in concepts_data:
        if c["id"] == concept_id:
            concept = c
            break

    if concept:
        return render_template(f'concepts/concept{concept_id}.html', concept=concept)
    else:
        return "Concept not found", 404
    
@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

if __name__ == '__main__':
    app.run(debug=True)
