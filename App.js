import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Svg } from 'expo';

const { height, width } = Dimensions.get('window');

const name = 'Bagus Herdiawan';
const tagline = 'Software Engineer';
const location = 'Indonesia';
const description = 'Starting with Visual Basic 6.0, walk into Ruby, Python and now falling in love with DevOps task [(50% Ansible + 50% weird code in Ubuntu) * (AWS + DO)] , but still cannot move on from Javascript, especially ReactJS, React Native and Express.';
const experiences = [
  {
    title: 'Software Engineer, DevOps',
    company: 'PT. Karir Komunika Pratama (karir.com)',
    time: 'Mar 2016 - present (2 yrs 1 mo)',
    location: 'Yogyakarta, Indonesia',
    description: 'Mostly about DevOps task (CI/CD, Infrastructure) but sometimes struggling with small code of Ruby, Python and Javascript.',
    image: require('./assets/images/karir.jpg'),
    skills: [
      {
        skill: 'VB 6',
        percent: 0.25,
      },
      {
        skill: 'MySQL',
        percent: 0.5,
      },
      {
        skill: 'PHP',
        percent: 0.4,
      },
      {
        skill: 'Wordpress',
        percent: 0.5,
      },
      {
        skill: 'Ansible',
        percent: 0.8,
      },
      {
        skill: 'Python',
        percent: 0.3,
      },
      {
        skill: 'Ruby',
        percent: 0.5,
      },
      {
        skill: 'AWS',
        percent: 0.8,
      },
      {
        skill: 'DO',
        percent: 0.3,
      },
      {
        skill: 'React Js',
        percent: 0.85,
      },
      {
        skill: 'React Native',
        percent: 0.85,
      },
      {
        skill: 'Node JS',
        percent: 0.54,
      },
      {
        skill: 'Express',
        percent: 0.5,
      },
      {
        skill: 'Docker',
        percent: 0.65,
      },
    ],
  },
  {
    title: 'Wordpress Developer',
    company: 'PT. SoftwareSeni',
    time: 'Nov 2014 - Mar 2016 (1 yr 5 mos)',
    location: 'Yogyakarta, Indonesia',
    description: 'Real estate website development at Wordpress environment.',
    image: require('./assets/images/softwareseni.png'),
    skills: [
      {
        skill: 'VB 6',
        percent: 0.3,
      },
      {
        skill: 'MySQL',
        percent: 0.5,
      },
      {
        skill: 'PHP',
        percent: 0.75,
      },
      {
        skill: 'Wordpress',
        percent: 0.9,
      },
    ],
  },
  {
    title: 'Visual Basic 6.0 Programmer',
    company: 'CV. Karya Hidup Sentosa',
    time: 'Feb 2012 - Oct 2014 (2 yrs 9 mos)',
    location: 'Yogyakarta, Indonesia',
    description: 'Programmer, System Analyst, System Designer and Database Administrator at Human Resource Department (Employee Data application).',
    image: require('./assets/images/quick.jpg'),
    skills: [
      {
        skill: 'VB 6',
        percent: 0.9,
      },
      {
        skill: 'MySQL',
        percent: 0.3,
      },
    ],
  },
];
const projects = [
  {
    title: 'TopSkor',
    link: 'https://play.google.com/store/apps/details?id=com.topskor',
    description: 'Topskor provides sport news with an attractive and sporty look to spoil its readers, especially for sports and communities as well as interesting video and photo journalism.',
    role: 'Role as React Native Developer',
    image: require('./assets/images/topskor.png'),
  },
  {
    title: 'BoostPlay',
    link: 'https://play.google.com/store/apps/details?id=com.dialog.boost.client.android',
    description: 'BoostPlay to explore exciting new places in your town. Have fun with BoostPlay to receive lots of BoostCoupons for you to use and reward yourself with so many gifts and prizes!',
    role: 'Role as React Native Developer',
    image: require('./assets/images/boost.png'),
  }
]

export default class App extends React.Component {
  line(top, left, key) {
    return (
      <Svg
        height={height}
        width={width}
        style={[styles.absolute, { top, left }]}
        key={key}
      >
        <Svg.Line
          x1={width}
          y1='0'
          x2='0'
          y2={height}
          stroke='#4a4b51'
          strokeWidth='1'
        />
      </Svg>
    );
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 30)) + min;
  }

  randomLine() {
    const totalLine = 10;
    return [...Array(totalLine)].map((a, i) => this.line(0, this.random(-250, 250), i));
  }

  nextPageButton(text, page, borderColor, color) {
    return (
      <TouchableOpacity
        style={[styles.viewMyWork, { borderColor }]}
        onPress={() => {
          this.refs.scrollView.scrollTo({ x: 0, y: (width + 290) * (page - 1), animated: true })
        }}
      >
        <Text style={[styles.heading, { color }]}>{text}</Text>
      </TouchableOpacity>
    );
  }

  welcome() {
    return (
      <View style={[styles.container, { backgroundColor: '#252834' }]}>
        {this.randomLine()}
        <View style={styles.inline}>
          <Text style={styles.heading}>Hello, I'm </Text>
          <Text style={[styles.heading, styles.name]}>{name}</Text>
        </View>
        <Text style={styles.heading}>{tagline}</Text>
        <Text style={styles.heading}>{location}</Text>
        {this.nextPageButton('What is it?', 2, '#ffffff', '#ffffff')}
      </View>
    );
  }

  about() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading2}>ABOUT</Text>
        <View style={styles.line} />
        <Text style={[styles.text, { textAlign: 'center' }]}>{description}</Text>
        {this.nextPageButton('- continue -', 3, '#ffffff', '#45474a')}
      </View>
    );
  }

  experience() {
    return (
      <View style={styles.container2}>
        <Text style={styles.heading2}>Experience</Text>
        <View style={styles.line} />
        {experiences.map((exp, index) => {
          return (
            <View key={index} style={styles.experienceContainer}>
              <Image source={exp.image} style={styles.imageExperience} />
              <Text style={[styles.text, { fontWeight: 'bold', fontSize: 22, marginBottom: 10 }]}>{exp.title}</Text>
              <Text style={styles.text}>{exp.company}</Text>
              <Text style={styles.text}>{exp.time}</Text>
              <Text style={styles.text}>{exp.location}</Text>
              <Text style={[styles.text, { marginTop: 10, marginBottom: 20 }]}>{exp.description}</Text>
              {exp.skills.map((sk, i) => {
                return (
                  <View key={i} style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={[styles.text, { width: 100, textAlign: 'left', backgroundColor: '#125AB0', color: '#ffffff', paddingLeft: 7 }]}>{sk.skill}</Text>
                    <View style={{ backgroundColor: '#EEEEEE', width: width - 140, flexDirection: 'row' }}>
                      <View style={{ backgroundColor: '#0596DE', flex: sk.percent }} />
                      <Text style={[styles.text, { position: 'absolute', right: 0 }]}>
                        {sk.percent * 100} %
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )
        })}
      </View>
    );
  }

  project() {
    return (
      <View style={[styles.container2, { backgroundColor: '#ffffff' }]}>
        <Text style={styles.heading2}>Projects</Text>
        <View style={styles.line} />
        {projects.map((project, index) => {
          return (
            <View key={index} style={styles.experienceContainer}>
              <Image source={project.image} style={styles.imageExperience} />
              <Text style={[ styles.text, { fontWeight: 'bold', fontSize: 22, marginBottom: 10, marginTop: 10 }]}>{project.title}</Text>
              <Text style={[styles.text, { fontWeight: 'bold', marginBottom: 10 }]}>{project.role}</Text>
              <Text style={styles.text}>{project.link}</Text>
              <Text style={[styles.text, { marginTop: 10, marginBottom: 10 }]}>{project.description}</Text>
            </View>
          )
        })}
      </View>
    );
  }

  footer() {
    return (
      <View style={[styles.container, { backgroundColor: '#252834' }]}>
        <Image source={require('./assets/images/bagus.jpg')} style={styles.image} />
        <Text style={styles.heading}>{'Have a question or want to work together?'}</Text>
        <Text style={styles.heading}>{'Contact me :)'}</Text>
        <Text style={[styles.heading, styles.name]}>{'bagusherdiawan@gmail.com'}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView ref="scrollView">
        {this.welcome()}
        {this.about()}
        {this.experience()}
        {this.project()}
        {this.footer()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  container: {
    height,
    width,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container2: {
    width,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  experienceContainer: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
  },
  heading: {
    fontSize: 26,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  heading2: {
    fontSize: 28,
    color: '#45474a',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  imageExperience: {
    width: width - 40,
    height: 100,
    resizeMode: 'contain'
  },
  inline: {
    flexDirection: 'row'
  },
  line: {
    width: 40,
    borderColor: '#45474a',
    borderTopWidth: 1,
    marginTop: 8,
    marginBottom: 40,
  },
  name: {
    color: '#aab4ff',
  },
  text: {
    fontSize: 18,
    color: '#45474a',
    textAlign: 'center',
  },
  viewMyWork: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 2,
    marginTop: 30,
    borderColor: '#ffffff',
  }
});
